import styled from "styled-components";

const ContactWrapper = styled.div`
.content {
    padding: 100px 50px;
    .row{
        .kartaDiv {
            border-radius: 10px;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
            transition: all 0.6s ease;
            overflow: hidden;

            .nameH {
                text-align: center;
            }
            .karta{
                border-radius: 10px;
            }
            hr {
                color: #2b0609;
                width: 100%;
                height: 5px;
            }
        }
        .contactDiv {
            border-radius: 10px;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
            transition: all 0.6s ease;
            overflow: hidden;

            .nameH {
                text-align: center;
            }
            hr {
                color: #2b0609;
                width: 100%;
                height: 5px;
            }
            a {
                margin-top: 20px;
                cursor: pointer;
                text-decoration: none;
                color: black;
                font-size: 18px;
            }
            .gr:hover
            {
                margin-left: 20px;
                box-shadow: none;
            }
            p {
                border-radius: 10px;
                font-weight: 500;
                padding: 10px;
                transition: all 0.6s ease;
            }
            p:hover{
                box-shadow: rgba(53, 15, 18, .599) -6px 6px, rgba(53, 15, 18, 0.19) -12px 12px ;
            }
        }
        .divHover:hover {
            box-shadow: rgba(53, 15, 18, .599) -10px 10px, rgba(53, 15, 18, 0.19) -20px 20px ;
        }
    }
    iframe {
        width: 300px;
        height: 300px;
    }
    h3 {
        font-weight: 700;
    }

    @media(max-width: 1000px) {
        .kartaDiv {
            border-radius: 10px;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
            transition: all 0.6s ease;
            overflow: hidden;

            margin-bottom: 10px;

            .nameH {
                text-align: center;
            }
            .karta{
                border-radius: 10px;
            }
            hr {
                color: #2b0609;
                width: 100%;
                height: 5px;
            }
        }
    }

    @media(max-width: 400px) {
        .kartaDiv {
            border-radius: 10px;
            padding: 20px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
            transition: all 0.6s ease;
            overflow: hidden;

            margin-bottom: 10px;

            .nameH {
                text-align: center;
            }
            .karta{
                border-radius: 10px;
            }
            hr {
                color: #2b0609;
                width: 100%;
                height: 5px;
            }
        }
    }
}

`;
export default ContactWrapper;