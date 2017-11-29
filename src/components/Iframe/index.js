import React, { Component } from 'react';
import { JSEncrypt } from 'jsencrypt';
import jwt from 'jsonwebtoken';
import './index.css';

const privkey = `MIIEogIBAAKCAQBxYkEm3zEsybhR2RTBhvo2Kt++dfwA836DD2asxcKFG22FOdb7
h/QKZM96s9tMkgu9OasMvowJciXyuclZKphv68MfvDskVo6ZrlFHsPr6PEtaMKmE
ZKp73qvjoltfe9fBCwqSF+HvlTwPmXyPme8j87iQ43Acp4Yyvzi5MPj0CqPGdds4
3sHS0R/cP+AOmTJOlzaGIDnqSB/EjbA1Giyct7Tx/G1uMevjqXCQYgCfg/cebwyD
RU+R/Ctkc/CfWnjrlU9i49oRi8Pi9sgcKzf785UNJnqOhuuGEQle2sJEyJ2l6T7k
3PWtINqfpeZXIJbEebQgV/r8Y/1+TB+alIhPAgMBAAECggEAb5vXJCtpXXwHKtIz
wzhZjf5wFixPbqRA8UO0vvc/vgS8rvq7awdtqtmG/nKSuPG+Cnr8q+PZNucdAavt
zg7G1MzPWqrP0Lo/Tnmv2pEUzEOTrOjfxMnOo3YR31YO+ZOPUp/KvPozVcGhyH0+
hqBxLQOYt06aKiqhR8zBSlIxjQ6oTAYIz+On3LGcbGF8malAXTNwm3/kfa0wbOA5
je9+nn78Jf282WA0RMxT4gEyz10xJ/66RwZHbVaDW4Z/5Uc5q57arEX6jkmoPLsr
ZKVVy6cT0AlM9HIcG4j0QADFnSUqGQp2GAMRpUeuXd6XS5IYqhzNtlEWbGr/iImx
nYmCYQKBgQCy+5z1ew7t1uXkmxLVfzDzB4MvhKDckxBpuX33alrK4DC4wpVlo/96
0s5IeqbLhQOFvSMhtENMnFiV7aol+S4XG9IEzy6mXB+kMZD2W2n4OdTIETJhTSfg
w9j+O+/ilTO8frz8WK8ZHxzSEEb2CEIURj/y/h4/GpJ3AGzaiUTFfwKBgQCiLGIX
Nvl8BV+dHwhs+Uxfpj09NJFYV6K0VSW0YOqYM5wtZHKH/2p4wql6f18Zf2h11fMZ
7OgrCHkNekXjGEYb3uFLae5HaQoUnKRO07l5Lw8br/W2uySJ9uTjZ+H7d+crZDYX
yHskUgJykD9+PPuAVmLFib1lTajj1xhIL5DFMQKBgClaZSt6oTpmmns1MSbO2lps
c+z4scoE2Jf02ZveoNea8ObfXnE7cP3J0wt/+yWut9+gkYtqANqkjPsnDFb1uaZx
MRcXX2nkgxMGuL2S5WsKwZTwFDnS/9G4rlwfMQ+i9W8pwTR0sRAW1ivawup5gfr5
ODFGcWqXExwXpw7fBFq1AoGBAIPzDsCKt0Ukbh4+ILHhyTVN4ifJfLTfYP/PA8WW
0WmTHHCGePWUaMHmyNRljDAHzSuLL6gZbPGOjEfeA7z5hBmrJ64fe4NYwJ3ysXF9
rTwfgPBrI8ZQ0DL80lEAtgrQDSPt/mEtepwbqegi27ZP0eYi42yMXLBvFoqC+TvK
j8URAoGABxX3d5qVu2Vduj/kmwV/ZadjNi9CSkJ4QbOYBOIoe7gMzkuer/CSl5yK
BfFbod/ScSnGemhj2jBIC300yBH5/01OShirjpR8vJ/mPvglsKYiJ7dv8ji9y9rw
uUxxbV0AwHVTZNlmPk+y1tQdl/uc1VD72oQg06y6mG0VH2MEQ1k=`;

class Iframe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            claims: {
                'tran_id': '0123456789'
            }
        }
    }
    render() {
        let jwtToken = jwt.sign(this.state.claims, privkey, { expiresIn: 10 });
        let crypt = new JSEncrypt();
        crypt.setPrivateKey(privkey);
        jwtToken = crypt.encrypt(jwtToken);
        return (
            <div>
                <iframe className= 'ssc-iframe' name='bfFrame' title='bluefinIframe' src={"http://localhost:3001/#" + jwtToken}  ></iframe>
            </div>
        );
    }
}

export default Iframe;

