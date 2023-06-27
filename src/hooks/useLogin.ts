import { LoginRequest, LoginResponse } from '@/api/interface/auth'
import { login } from '@/api/service/auth'
import { setUser } from '@/store/userSlice'
import { setToken } from '@/utils/token'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'

export const useLogin = () => {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const loginMutation = useMutation<LoginResponse, AxiosError, LoginRequest>(login, {
    onSuccess: (data) => {
      queryClient.setQueryData(['LoginData'], data.data)
      dispatch(setUser(data.data.userId))
      //리랜더링을 위해 헤더에서 accesTocken말고 userId로 구분하는것으로
    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })

  return {
    mutate: loginMutation.mutate,
  }
}
