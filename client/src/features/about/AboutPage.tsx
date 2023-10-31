import { Alert, AlertTitle, Button, ButtonGroup, Container, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";
//import { error } from "console";

export default function AboutPage() {
    const[validationErrrors,setValidationErrors]=useState<string[]>([]);
    function getValidationError(){
        agent.TestErrors.getValidationError()
            .then(()=>console.log('should not see this'))
            .catch((error)=>setValidationErrors(error));
    }
    return (
        <Container>
            <Typography gutterBottom variant='h2'>Errors for testing purpose</Typography>
            <ButtonGroup fullWidth>
            <Button variant='contained' onClick={()=>agent.TestErrors.get400Error().catch(error=>console.log(error))}>Test 400 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get401Error().catch(error=>console.log(error))}>Test 401 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get404Error().catch(error=>console.log(error))}>Test 404 Error</Button>
            <Button variant='contained' onClick={()=>agent.TestErrors.get500Error().catch(error=>console.log(error))}>Test 500 Error</Button>
            <Button variant='contained' onClick={getValidationError}>Test validation Error</Button>
            </ButtonGroup>
            {validationErrrors.length>0&&
             <Alert severity='error'>
                <AlertTitle>Validation Errors</AlertTitle>
                {validationErrrors.map(error=>(
                    <ListItem key={error}>
                        <ListItemText>{error}</ListItemText>
                    </ListItem>
                ))}
             </Alert>
            
            }
        </Container>
    );
}