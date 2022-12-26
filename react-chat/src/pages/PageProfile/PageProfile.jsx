import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import style from "./PageProfile.module.scss";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import ProfileInfoBlock from "../../components/ProfileInfoBlock/ProfileInfoBlock";
import ChangesAppliedMsg from "../../components/ChangesAppliedMsg/ChangesAppliedMsg";

function getProfileInfo() {
    let fullname = localStorage.getItem("fullname") || "";
    let username = localStorage.getItem("username") || "";
    let birthday = localStorage.getItem("birthday") || "";
    let bio = localStorage.getItem("bio") || "";
    return [fullname, username, birthday, bio];
}

function saveProfileInfo(fullname, username, birthday, bio) {
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("username", username);
    localStorage.setItem("birthday", birthday);
    localStorage.setItem("bio", bio);
}

export default function PageProfile() {
    const profile_info = getProfileInfo();
    const [fullname, setFullname] = useState(profile_info[0]);
    const [username, setUsername] = useState(profile_info[1]);
    const [birthday, setBirthday] = useState(profile_info[2]);
    const [bio, setBio] = useState(profile_info[3]);

    const [changeStatus, setChangeStatus] = useState(false);

    function handleClick() {
        saveProfileInfo(fullname, username, birthday, bio);
        setChangeStatus(true);
    }

    return (
        <React.Fragment>
            <ProfileHeader onClick={handleClick} />
            <div className={style.profileInfo}>
                <ProfileAvatar
                    img_path="https://i.pinimg.com/originals/a6/f4/90/a6f490d623675643c480ad2925c182cd.jpg"
                />
                {changeStatus && <ChangesAppliedMsg />}
                <ProfileInfoBlock
                    onChange={event => setFullname(event.target.value)}
                    title="Full name"
                    value={fullname}
                    placeholder="Введите ваше имя..."
                    input_type="text"
                    InputTag={"input"}
                />
                <ProfileInfoBlock
                    onChange={event => setUsername(event.target.value)}
                    title="Username"
                    value={username}
                    value_decorator="@"
                    hint="Минимальная длина 5 символов"
                    placeholder="username"
                    input_type="text"
                    InputTag={"input"}
                />
                <ProfileInfoBlock
                    onChange={event => setBirthday(event.target.value)}
                    title="Birthday"
                    value={birthday}
                    input_type="date"
                    InputTag={"input"}
                />
                <ProfileInfoBlock
                    onChange={event => setBio(event.target.value)}
                    title="Bio"
                    value={bio}
                    hint="Расскажите о себе"
                    placeholder="Краткая информация..."
                    InputTag={TextareaAutosize}
                />
            </div>
        </React.Fragment>
    );
}
