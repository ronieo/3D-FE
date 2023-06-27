import { axiosInstance } from '../axios'
import { AssetResponse } from '../interface/asset'

/**
 * 내 에셋 관련 API
 */
export const getMyAssets = async <T = AssetResponse>(
  id: number,
  page: number,
  size: number,
): Promise<T> => {
  const res = await axiosInstance.get<T>(`/s/user/${id}/assets&page=${page}&size${size}=`)
  return res.data
}
