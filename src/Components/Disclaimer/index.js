import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Grow } from '@mui/material';

function DisclaimerPopup({ open, onClose, onAgree, onDisagree }) {
    return (
        <Dialog open={open} onClose={onClose} TransitionComponent={Grow} TransitionProps={{ timeout: 1000 }}>
            <DialogTitle>Disclaimer</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Current rules of the Bar Council of India impose restrictions on maintaining a web page and do not permit lawyers to provide information concerning their areas of practice. PR Legal help is therefore, constrained from providing any further information on this web page.

                    The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on ‘I AGREE’, the user acknowledges that:

                    The user wishes to gain more information about PR LEGAL HELP, its practice areas and its attorneys, for his/her own information and use

                    The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship

                    None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.

                    PR Legal help , is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onAgree} variant="contained" style={{backgroundColor:"#996515"}}>
                    Agree
                </Button>
                <Button onClick={onDisagree} variant="contained" color="secondary" style={{backgroundColor:"black"}}>
                    Disagree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DisclaimerPopup;
