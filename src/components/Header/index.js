import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Remulo Costa</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://avatars3.githubusercontent.com/u/6256437?s=460&v=4"
              alt="Remulo Costa"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}