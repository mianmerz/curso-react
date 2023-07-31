import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>

        <NoteView></NoteView>
        {/* <NothingSelectedView></NothingSelectedView> */}
      </JournalLayout>
    </>
  )
}
