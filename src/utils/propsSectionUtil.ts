import { parse } from 'react-docgen-typescript'

export const faststoreComponentsFromNodeModules =
  'node_modules/@faststore/components'

export function mapComponentFromMdxPath(
  currentPath: string,
  atomicDesignType: string,
  component: string
): string {
  const sourceDir = currentPath.split('/devportal/')[0]
  console.log(sourceDir)
  const faststoreComponentsSrcFromNodeModules = `${sourceDir}/devportal/node_modules/@faststore/components/src/${atomicDesignType}`
  // e.g. <user-path>/devportal/node_modules/@faststore/components/src/molecules/Accordion/Accordion.tsx

  return [
    faststoreComponentsSrcFromNodeModules,
    component,
    `${component}.tsx`,
  ].join('/')
}

export function getComponentPropsFrom(
  currentPath: string,
  atomicDesignType: string,
  componentsName: string
) {
  const componentPath: string = mapComponentFromMdxPath(
    currentPath,
    atomicDesignType,
    componentsName
  )
  const options = {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldExtractValuesFromUnion: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    propFilter: (prop: any) =>
      prop?.parent?.fileName?.includes(faststoreComponentsFromNodeModules),
  }

  const componentInfo = parse(componentPath, options)
  const componentProps = componentInfo?.[0]?.props ?? {}

  return Object.keys(componentProps).map((key) => {
    const prop = componentProps[key]
    return {
      name: key,
      type:
        prop.type?.value
          ?.map(({ value }: { value: string }) => value)
          .join(' | ') ??
        prop.type?.raw ??
        prop.type?.name ??
        '',
      required: prop.required,
      default: prop.defaultValue?.value ?? '',
      description: prop.description ?? '',
    }
  })
}
