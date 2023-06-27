import { getMyAssets } from '@/api/service/myAsset'
import { useQuery } from '@tanstack/react-query'

// export const useGetAssets = ({ id, page, size }: number) => {
//   const { data: myAssets } = useQuery({
//     queryKey: ['assets', page],
//     queryFn: () => getMyAssets(page),
//     keepPreviousData: true,
//   })

//   return { myAssets }
// }
