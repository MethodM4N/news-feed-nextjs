import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import styles from './WriteForm.module.scss';
import { Button, Input } from '@material-ui/core';

const Editor = dynamic(() => import('../Editor').then((m) => m.Editor), { ssr: false });

interface WriteFormProps {
  // @ts-ignore
  data?: PostItem;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState(data?.title || '');
  const [blocks, setBlocks] = React.useState(data?.body || []);

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={data?.body} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button disabled={isLoading || !blocks.length || !title} variant="contained" color="primary">
        {data ? 'Сохранить' : 'Опубликовать'}
      </Button>
    </div>
  );
};
