import { Header1, ProductCard, ProductType } from 'incart-fe-common'
import { useLoaderData } from 'react-router-dom'

import { Breadcrumb, ControlGroup } from '@/components'
import { EditProductInfo } from './parts'
import { Doc } from '@/types/utils'

export default () => {
    const product = useLoaderData() as Doc<ProductType>

    return (
        <>
            <Breadcrumb customReadable={['상품', product.name]} />
            <Header1>구매창 미리보기</Header1>
            <ProductCard product={product} />
            <ControlGroup name="상품 정보 수정 (이름, 가격, 상세설명, 옵션)">
                <EditProductInfo product={product} />
            </ControlGroup>
        </>
    )
}
