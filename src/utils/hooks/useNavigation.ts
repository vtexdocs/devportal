import useSWRImmutable from 'swr'

export default function useNavigation() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error } = useSWRImmutable('/api/navigation', fetcher, {
    revalidateOnFocus: false,
  })
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}
