import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <Typography variant='h1'>Journal Page</Typography>
        <MailOutline />

        {/* Nothing selected */}
      </JournalLayout>
    </>
  )
}
