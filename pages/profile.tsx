import React, { useState } from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  SelectChangeEvent,
} from "@mui/material";
import { CustomButton } from "@/components/common/Button"
import { profilestyles } from "@/styles/profile/profile";
import { SelectForm } from "@/components/common/SelectForm";
import { Avatar } from "@/components/ui/Avatar"
import { InputField } from "@/components/common/Input";

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
  prefecture = "",
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

  const handleSave = () => {
    setOpen(false);
  };

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    setValues({ ...values, [e.target.name]: e.target.value as string });
  };

  return (
    <div>
      <DialogTitle id="form-dialog-title">
        <Avatar src="" alt="" />
      </DialogTitle>
      <DialogContent sx={{ ...profilestyles.paper, display: "flex", flexDirection: "column" }}>
        <InputField
          label="お名前"
          value={values.name}
          margin="normal"
        />
        <InputField
          label="ふりがな"
          value={values.furigana}
          margin="normal"
        />
        <SelectForm
          labelId="prefecture"
          label="お住まいの県"
          name="prefecture"
          value={values.prefecture}
          onChange={handleChange}
        />
        <InputField
          label="得意な家事"
          value={values.skill}
          margin="normal"
        />
        <InputField
          label="自己紹介"
          multiline={true}
          rows={15}
          value={values.intro}
          margin="normal"
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <CustomButton variant="contained" onClick={handleSave} size="large" buttonName="保存" />
      </DialogActions>
    </div>
  );
};

export default ProfileEditor;
