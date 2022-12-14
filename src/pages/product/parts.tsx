import emptyHandImage from 'incart-fe-common/src/images/empty-hand.png'
import { Header2, Text1, Text2 } from 'incart-fe-common'

import { Hexile, Vexile } from '@haechi/flexile'
import { ReactComponent as Code } from '@/icons/code.svg'
import { ReactComponent as Link } from '@/icons/link.svg'
import { ListItem } from './styles'
import { ICON_SIZE_24 } from '@/constants'
import { Plink } from '@/components'

export default {
    EmptyList: () => (
        <ListItem.wrapper padding={15} gap={4} x="center">
            <Text1 grey5>상품 목록이 비어있습니다</Text1>
            <img src={emptyHandImage} />
        </ListItem.wrapper>
    ),
    ProductListItem: (props: {
        product: { name: string; info: string; id: string }
    }) => {
        return (
            <Plink animation to={props.product.id}>
                <ListItem.wrapper padding={6} gap={3}>
                    <Vexile gap={2}>
                        <Header2>{props.product.name}</Header2>
                        <Text2>{props.product.info}</Text2>
                    </Vexile>
                    <Hexile gap={3} x="right">
                        <Code style={ICON_SIZE_24} />
                        <Link style={ICON_SIZE_24} />
                    </Hexile>
                </ListItem.wrapper>
            </Plink>
        )
    },
}
