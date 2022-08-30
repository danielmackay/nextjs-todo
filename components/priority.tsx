import { Box, Chip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { Priority } from "../apiClient/data-contracts";

interface PriorityProps {
  priority: Priority
}

const PriorityPicker = (props: PriorityProps) => {
  const clickable = false;

  const getIcon = (priority: Priority) => priority === props.priority ? <DoneIcon /> : undefined;

  return (
    <Box sx={{ mb: 1 }}>
      <Chip label="low" color="success" icon={getIcon(1)} clickable={clickable} onClick={() => true} sx={{ml: 1}} />
      <Chip label="medium" color="warning" icon={getIcon(2)} clickable={clickable} onClick={() => true} sx={{ml: 1}}/>
      <Chip label="high" color="error" icon={getIcon(3)} clickable={clickable} onClick={() => true} sx={{ml: 1}}/>
    </Box>
  )
}

export default PriorityPicker;

