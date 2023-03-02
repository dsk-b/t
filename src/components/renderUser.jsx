import { useContext } from "react";
import { MyContext } from "../App";
import UserCard from "./userCard";

export const RenderUser = () => {
    const { projectNo, projectMembers } = useContext(MyContext);
    projectNo && console.log(projectMembers[projectNo - 1].name);
    return projectNo && projectMembers.map((item, i) => {
           return <>
           <UserCard item={item} key={i} />
           </>
        })
};
