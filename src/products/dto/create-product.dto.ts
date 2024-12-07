import {product} from '@prisma/client' 

export type CreateProductDto = Omit<product, 'id' | 'createdAt' | 'updateAt'> 