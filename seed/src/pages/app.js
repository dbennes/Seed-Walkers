import React from 'react'

const app = () => {
  return (
    <>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <div>dashboard</div>

    <div id="g_id_onload"
        data-client_id="905694888986-7rchd6o1mh1un95rn3kkkniad007271l.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="https://seed-walkers-dapp.vercel.app"
        data-auto_prompt="false">
    </div>

    <div className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with."
        data-size="large"
        data-logo_alignment="left">
    </div> 
    </>
  )
}

export default app