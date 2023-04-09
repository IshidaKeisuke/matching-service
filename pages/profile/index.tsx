import React, { useState } from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
  SelectChangeEvent,
} from '@mui/material';
import { liff } from "@line/liff";
import { FormField } from '@/components/common/TextField';
import { FormButton } from '@/components/common/FormButton';
import { profilestyles } from '@/styles/profile/profile';
import { SelectForm } from '@/components/common/SelectForm';


interface ProfileProps {
  name: string;
  furigana: string;
  prefecture: string;
  skill: string;
  intro: string;
}

const ProfileEditor: React.FC<ProfileProps> = ({
    name,
    furigana,
    prefecture,
    skill,
    intro,
  }) => {
  const [open, setOpen] = useState(true);
  const [values, setValues] = useState<ProfileProps>({
    name,
    furigana,
    prefecture,
    skill,
    intro,
  });

  const handleCancel = () => {
    liff.closeWindow();
  };

  const handleSave = () => {
    setOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | SelectChangeEvent
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <DialogTitle id="form-dialog-title">
        <Avatar sx={profilestyles.avatar} alt="icon" />
      </DialogTitle>
      <DialogContent sx={profilestyles.paper}>
        <FormField
          name='name'
          label='お名前'
          value={values.name}
        />
        <FormField
          name='furigana'
          label='ふりがな'
          value={values.furigana}
        />
        <SelectForm
          labelId="prefecture"
          label="お住まいの県"
          name="prefecture"
          value={values.prefecture}
          onChange={handleChange}
        />
        <FormField
          name='skill'
          label='得意な家事'
          value={values.skill}
        />
        <FormField
          name='intro'
          label='自己紹介'
          multiline={true}
          rows={15}
          value={values.intro}
        />
      </DialogContent>
      <DialogActions>
        <FormButton variant={"outlined"} onClick={handleCancel} buttonName={"キャンセル"} />
        <FormButton variant={"contained"} onClick={handleSave} buttonName={"保存"} />
      </DialogActions>
    </div>
  );
};

export default ProfileEditor;
