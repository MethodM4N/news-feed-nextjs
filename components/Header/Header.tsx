import React from 'react';
import Link from 'next/link';

import { AuthDialog } from '../AuthDialog/AuthDialog';

import styles from './Header.module.scss';
import { Paper, Button, IconButton, Avatar, ListItem, List } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

export const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  //@ts-ignore
  const [posts, setPosts] = React.useState<PostItem[]>([]);

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input value={searchValue} placeholder="Поиск" />
          {posts.length > 0 && (
            <Paper className={styles.searchBlockPopup}>
              <List>
                {posts.map((obj) => (
                  <Link key={obj.id} href={`/news/${obj.id}`}>
                    <a>
                      <ListItem button>{obj.title}</ListItem>
                    </a>
                  </Link>
                ))}
              </List>
            </Paper>
          )}
        </div>
        <Link href="/write/writepage">
          <a>
            {'11' && (
              <Button variant="contained" className={styles.penButton}>
                Новая запись
              </Button>
            )}
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {'11' ? (
          <Link href="/profile/1">
            <a className="d-flex align-center">
              <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
              />
              <ArrowBottom />
            </a>
          </Link>
        ) : (
          <div className={styles.loginButton}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      {authVisible && (
        <AuthDialog
          visible={authVisible}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}
    </Paper>
  );
};
