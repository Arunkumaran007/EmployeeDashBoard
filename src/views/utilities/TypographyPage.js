import React from 'react';
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import BlankCard from 'src/components/shared/BlankCard';


const TypographyPage = () => {
  return (
    <PageContainer title="Typography" description="this is Typography">

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <DashboardCard title="Leave Details">
            <Grid container spacing={3}>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h1">Leaves Available</Typography>
                    <Typography variant="body1" color="textSecondary">
                      Total 13 
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h2">Leaves taken</Typography>
                    <Typography variant="body1" color="textSecondary">
                      6 Days 
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="h3">Sick Leave</Typography>

                    <Typography variant="body1" color="textSecondary">
                      6 Days 
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              
             
             
              
              
              <Grid item sm={12}>
                <BlankCard>
                  <CardContent>
                    <Typography variant="body2">
                      
                    </Typography>

                    <Typography variant="" color="textSecondary">
                      You need to inform the Hr before the leave (Expext the sick Leave)
                    </Typography>
                  </CardContent>
                </BlankCard>
              </Grid>
              
              
            </Grid>

          </DashboardCard>
        </Grid>
              </Grid >
    </PageContainer>
  );
};

export default TypographyPage;
