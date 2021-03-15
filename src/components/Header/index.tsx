import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  toggleModal: () => void;
}

export default function Header({ toggleModal }: IHeaderProps) {
  return (
    <Container>
        <header>
          <img src={Logo} alt="GoRestaurant" />
          <nav>
            <div>
              <button
                type="button"
                onClick={toggleModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
  );
}