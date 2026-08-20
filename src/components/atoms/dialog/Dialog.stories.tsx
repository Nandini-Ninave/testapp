// import  Dialog  from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import {AlertDialog}  from "./Dialog";
import DeleteIcon from '@mui/icons-material/Delete';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';;

const meta: Meta<typeof AlertDialog> = {
  title: 'Atoms/AlertDialog',
  component: AlertDialog,
  
};
export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Edit: Story = {
  args: {
    HeaderIcon:PriorityHighIcon,
    HeaderIconColor:'warning',
    buttonLabel: 'edit',
    modalTitle: 'Discard Changes?',
    modalContent: 'Are you sure you want to discard changes',
    modalButton:[{label:"Keep editing", color:"primary", variant:"contained"}, {label:"Agree", color:"primary"}]
  },
};
export const Delete: Story = {
  args: {
    HeaderIcon: DeleteIcon,
    HeaderIconColor:'warning',
    buttonLabel: 'delete',
    modalTitle: 'Confirm Delete?',
    modalContent: 'Are you sure you want to delete',
    modalButton:[{label:"Agree", color:"error"}, {label:"Disagree", color:"primary"}],
  },
};