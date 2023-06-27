import { FieldValues } from 'react-hook-form'

export interface MyAssets extends FieldValues {
  data: {
    myAssetList: [
      {
        orderId: number
        orderNumber: string
        orderDate: Date | string
        totalPrice: number
        assetCount: number
      },
    ]
    size: number
    currentPage: number
    totalPage: number
    totalElement: number
  }
}
