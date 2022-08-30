import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import TodoDetails from '../../components/todos/todoDetails'
import { useTheme } from '@mui/material';

const TodoItem: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const theme = useTheme();
  
  
  const getTodoItemId = () => {
    if (!id || Array.isArray(id))
      return 0;

    return parseInt(id);
  }

  const todoItemId = getTodoItemId();

  return (
    <>
      <Head>
        <title>Todo Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/" style={{color: 'blue'}}><a style={{color: theme.palette.primary.main}}>Back</a></Link>
      <Typography variant='h2' sx={{ mb: 2 }}>Todo Details</Typography>
      {!!todoItemId && <TodoDetails todoItemId={todoItemId} />}
    </>
  )
}

export default TodoItem;
