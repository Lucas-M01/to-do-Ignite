import rocket from '../../assets/rocket.svg'
import { RegularText } from '../Typography'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img className="rocket" src={rocket} alt="rocket" />
      <div>
        <RegularText title="true" size="l" weight={800}>
          to<span className="span">do</span>
        </RegularText>
      </div>
    </HeaderContainer>
  )
}
