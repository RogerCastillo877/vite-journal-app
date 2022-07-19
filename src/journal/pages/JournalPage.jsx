import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, autem nemo ducimus temporibus ab optio distinctio tempore vero iste quibusdam est ipsum laudantium iusto quis ea non nesciunt id accusamus!</Typography> */}

      {/* <NothingSelectedView /> */}

      <NoteView />
    </JournalLayout>
  )
}
