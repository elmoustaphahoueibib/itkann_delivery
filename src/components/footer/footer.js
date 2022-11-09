/** @jsx jsx */
import {jsx, Heading, Box, Container, Text, Image} from 'theme-ui';
import { Link } from 'components/link';
import menuItems from './footer.data';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchat,
} from 'react-icons/fa';
import React from "react";
import Itkann from "../../assets/itkann_cercle_whitetrans.svg";


const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaLinkedinIn />,
  },
  {
    path: '/',
    icon: <FaInstagram />,
  },
  {
    path: '/',
    icon: <FaSnapchat />
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Text sx={styles.footer.copyright}>
        <div
            style={
              {
                display: 'flex',
                justifyContent: 'center'
              }
            }
        >
          <Image src={Itkann} alt="itkann" width={"150px"} />
        </div>
        All right reserved - Design & Developed by
        <Link path="#" target="_blank">
          Itkann - SARL
        </Link>
      </Text>

    </footer>
  );
}

const styles = {
  footer: {
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [0, null, null, null, 4],
    },
    menus: {
      width: ['50%', null, null, '25%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['40px', null, null, '60px'],
    },

    heading: {
      fontSize: [3, null, null, 4],
      color: 'gold',
      fontWeight: '500',
      mb: [3, 4, 5, null, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    social: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text',
        fontSize: 14,
        mr: '15px',
        transition: 'all 0.25s',
        cursor: 'pointer',
        ':last-child': {
          mr: '0',
        },
        '&:hover': {
          color: 'secondary',
        },
      },
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['20px 20px'],
      backgroundColor: 'gold',
      color: 'white',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
};
