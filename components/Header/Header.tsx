import { useState } from 'react';
import { Typography } from '@mui/material';
import HeaderWrapper, { NavButton } from './Header.style';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import BadgerHubLogo from '../../public/images/badgerHubLogo.png';
import Link from 'next/link';

const pages = ['About us', 'Games', 'Blog', 'Connect with us'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HeaderWrapper position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box
            className='largeScreenHeader'
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Link href={'/'} className='logoSection'>
              <Image
                alt='Badger Hub logo'
                className='badgerLogo'
                src={BadgerHubLogo}
                width={60}
                height={72}
              />
              <h1 className='logoText'>Badger Hub</h1>
            </Link>
          </Box>

          <Box
            className='smallScreenHeader'
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                  alignItems: 'center',
                },
              }}
            >
              <Link href={'/'} className='logoSection'>
                <Image
                  alt='Badger Hub logo'
                  className='badgerLogo'
                  src={BadgerHubLogo}
                  width={60}
                  height={72}
                />
                <h1 className='logoText'>Badger Hub</h1>
              </Link>
            </Box>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              justifyContent: 'flex-end',
            }}
          >
            {pages.map((page) => (
              <NavButton
                key={page}
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
