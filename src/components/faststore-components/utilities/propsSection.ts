/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path'
import { parse } from 'react-docgen-typescript'

export const faststoreComponentsFromNodeModules = `node_modules/@faststore/components`

function toPascalCase(string: string) {
  // matches one or more non-alphanumeric characters ([^a-zA-Z0-9]+) followed by any character ((.)) and replaces the following character with its uppercase version using a callback function.
  return (' ' + string)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => {
      return chr.toUpperCase()
    })
}

export function mapComponentFromMdxPath(
  mdxPath: string,
  components: string[]
): string[] {
  const componentsAbsolutePath = path.resolve(
    'node_modules',
    '@faststore/components',
    'src'
  )

  const dirs = mdxPath.split('/')

  // 2 levels before e.g. molecules/accordion.mdx
  while (dirs.length > 2) {
    dirs.shift()
  }

  const atomicDesignType = dirs[0] // atoms, molecules, organisms
  const componentNameWithoutExtension = dirs[1]?.split('.')[0] // e.g. accordion.mdx -> accordion
  const componentFolder = toPascalCase(componentNameWithoutExtension) // e.g. Accordion

  // e.g. <user-path>/faststore/node_modules/@faststore/components/src/molecules/Accordion/Accordion.tsx
  return components?.map((component: string) => {
    return [
      componentsAbsolutePath,
      atomicDesignType,
      componentFolder,
      component,
    ].join('/')
  })
}

export function getComponentPropsFrom(
  absoluteMdxPath: string,
  componentsName: string[]
) {
  try {
    const components: string[] = mapComponentFromMdxPath(
      absoluteMdxPath,
      componentsName
    )

    const options = {
      savePropValueAsString: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      propFilter: (prop: any) =>
        prop?.parent?.fileName?.includes(faststoreComponentsFromNodeModules),
    }

    return components.map((componentPath) => {
      const componentInfo = parse(componentPath, options)
      const componentProps = componentInfo?.[0]?.props ?? {}

      return Object.keys(componentProps).map((key) => {
        const prop = componentProps[key]
        return {
          name: key,
          type:
            prop.type?.value
              ?.map(({ value }: { value: any }) => value)
              .join(' | ') ??
            prop.type?.raw ??
            prop.type?.name ??
            '',
          required: prop.required,
          default: prop.defaultValue?.value ?? '',
          description: prop.description ?? '',
        }
      })
    })
  } catch (error) {
    console.error(`Error getting props for ${absoluteMdxPath}`)
    return []
  }
}
