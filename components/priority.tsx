import { Box, Chip } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { Priority } from "../apiClient/data-contracts";
import { useState } from "react";

interface PriorityProps {
  priority: Priority
  priorityUpdated: (priority: Priority) => void;
}

const PriorityPicker = (props: PriorityProps) => {
  const [priority, setPriority] = useState(props.priority);
  const clickable = true;

  const onClick = (priority: Priority) => {
    setPriority(priority);
    props.priorityUpdated(priority);
  }

  const getIcon = (priority: Priority) => priority === props.priority ? <DoneIcon /> : undefined;

  return (
    <Box sx={{ mb: 1 }}>
      <Chip label="low" color="success" icon={getIcon(1)} clickable={clickable} onClick={() => onClick(1)} sx={{ml: 1}} />
      <Chip label="medium" color="warning" icon={getIcon(2)} clickable={clickable} onClick={() => onClick(2)} sx={{ml: 1}}/>
      <Chip label="high" color="error" icon={getIcon(3)} clickable={clickable} onClick={() => onClick(3)} sx={{ml: 1}}/>
    </Box>
  )
}

export default PriorityPicker;

