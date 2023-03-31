import React from 'react';

import styles from './Comment.module.scss';
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

interface CommentPostProps {
  id: number;
  //@ts-ignore
  user: ResponseUser;
  text: string;
  createdAt: string;
  currentUserId: number;
  onRemove: (id: number) => void;
}

export const Comment: React.FC<CommentPostProps> = ({
  id,
  user,
  text,
  createdAt,
  currentUserId,
  onRemove,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar style={{ marginRight: 10 }}>{user.fullName[0]}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      {user.id === currentUserId && (
        <>
          <span className={styles.replyBtn}>Ответить</span>
          <IconButton>
            <MoreIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} elevation={2} open={Boolean(anchorEl)} keepMounted>
            <MenuItem>Удалить</MenuItem>
            <MenuItem>Редактировать</MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
};
