import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import TodoDetails from '../../components/todos/todoDetails'

const TodoItem: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const getTodoItemId = () => {
    if (!id || Array.isArray(id))
      return 0;

    return parseInt(id);
  }

  return (
    <>
      <Head>
        <title>Todo Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant='h2' sx={{mb: 2}}>Todo Details</Typography>
      <TodoDetails todoItemId={getTodoItemId()} />
    </>
  )
}

export default TodoItem;
