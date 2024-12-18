import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CommentSection(currentMove) {    
    function handleSubmit(event) {
        console.log("handled!")
        event.preventDefault()
        const postUrl = 'http://localhost:3001/post'
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const content = formData.get('content')
        const playerHasMoved = currentMove.data.hasOwnProperty('currentMove')

        if(playerHasMoved) {
            const comment = {
                title: title,
                content: content,
                move: currentMove,
            };               
            fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    title: comment.title, 
                    content: comment.content, 
                    move: comment.move.data
                })
            })
            .then((response) => {
                document.getElementById('title_field').value = ''
                document.getElementById('content_field').value = ''
                return response.json();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            console.log('disable submit button')
        }
    }
  
    return (
        <>  
            <Box
                component="form"
                display='flex'
                flexDirection='column'
                rowGap={'8px'}
                autoComplete="off"
                action="/api/comment"
                onSubmit={handleSubmit} 
                method="POST"
            >
                  <TextField id='title_field' label="Title" variant="outlined" name="title"/>
                  <TextField id="content_field" label="Content" variant="outlined" name="content"/>
                  <Button type="submit" variant="outlined">Outlined</Button>
            </Box>
        </>
    )
     
}


