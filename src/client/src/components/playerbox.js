import { Typography } from "@mui/material";
import { Grid } from "@mui/system"
import {Box} from "@mui/system";

export default function PlayerCards() {
    return (
        <Grid container justifyContent={'space-between'} flexDirection="row" margin={'10px'}>
            <Grid item>
                <Grid container spacing={4} flexDirection="row">
                    <Grid item>
                        <ProfilePhoto 
                            src='/userprofilepic.jpg'
                            alt="Profile Photo" 
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                        Fallin
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item > 
                        <Timer/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ProfilePhoto = ({ src, alt }) => {
    return (
      <div className="w-full max-w-xs mx-auto">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-full"
          style={{ aspectRatio: '1 / 1' , heigh: '50px', width: '50px' }}
        />
      </div>
    );
  };


const Timer = ({}) => {
    return (
        <Box sx={{backgroundColor:'white', height: '50px', width: '80px', padding:'8px', borderRadius:'5px'}}>
            36:42:00
        </Box>
    )
}