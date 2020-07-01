import React from "react"
import SContainer from "../components/container"
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import icon from '../images/avatar/1.png'

const Skills = ({data}) => {

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <SContainer title="Skills" description="Things I do">
            <Chip label="Basic" />
            <Chip label="Basic" />
            <Chip label="Disabled" disabled />
            <Chip avatar={<Avatar>Python</Avatar>} label="Clickable" onClick={handleClick} />
            <Chip
                avatar={<Avatar alt="Natacha" src={icon} />}
                label="Image"
                onDelete={handleDelete}
            />
            <Chip
                label="Custom delete icon"
                onClick={handleClick}
                onDelete={handleDelete}
            />
            <Chip label="Clickable Link" component="a" href="#chip" clickable />
            <Chip
                avatar={<Avatar>M</Avatar>}
                label="Primary clickable"
                clickable
                color="primary"
                onDelete={handleDelete}
            />
            <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
        </SContainer>
    )
}


export default Skills
