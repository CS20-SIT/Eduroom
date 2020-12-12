exports.verifyTemplate = (verifyToken) => {
	return `<div class="verify-box">
    <img src="https://eduroom.cscms.me/images/verify/eduroom_logo_long.sv" alt="eduroom_logo" />
    <div class="verify-image">
        <img src="https://eduroom.cscms.me/images/verify/verify_sent.svg" alt="verify-image" />
    </div>
    <div class="verify-head">Verify your email address</div>
    <div class="verify-text">Welcome to <a href="https://eduroom.cscms.me" style="color:#FB9CCB">eduroom.cscms.me</a></div>
    <div class="verify-text">Please click the button below to comfirm </div>
    <div class="verify-text">your email address and activate your account.</div>
    <a href="https://eduroom.cscms.me/verify/${verifyToken}">
    <div class="ver-btn">
        <div class="ver-text">Verify</div>
    </div>
    </a>
    <div class="verify-text">
        You’re receiving this email because you recently created a new Eduroom account.
    </div>
    <div class="verify-text">if this wasn’t you, please ignore this email</div>
</div>
<style>
        .verify-box {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-flow: column;
            padding: 1rem;
            cursor: default;
            backgroundImage: url(https://eduroom.cscms.me/images/verify/verify-bg.svg);
            backgroundPosition: center;
            backgroundSize: cover; 
            backgroundRepeat:no-repeat;
        }
        .verify-image {
            margin: 0.2rem 0;
        }
        .verify-text {
            font-weight: 500;
            font-size: 1.1em;
            color: #a7abc5;
        }
        .verify-head {
            font-weight: bold;
            font-size: 1.5em;
            color: #3d467f;
            margin-bottom: 0.4rem;
            text-transform: uppercase;
        }
        .ver-btn {
            padding: 0.5rem 1.5rem;
            border-radius: 25px;
            border: 1px solid #3d467f;
            margin-top: 1.2rem;
            cursor: pointer;
            background: #3d467f;
            color: #ffffff;
        }
        .ver-text {
            font-weight: bold;
            font-size: 1.2em;
        }
</style>`
}
