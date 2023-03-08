import stripe
import os
from flask import Flask, redirect, request
stripe.api_key = "sk_test_51MZNdXDkVZPCuxAgUEcj4WixI3PPzfrl8zHpbcIISboO4VqFyGEmVLlIimWwGvb7gmGHYWpBnwR7BpFNBay7HZ6o00hG20up49"

stripe.Product.modify("prod_NUV1H20pUJcrme", active=False)

# example code from https://stripe.com/docs/payments/checkout/how-checkout-works
'''
app = Flask(__name__,
            static_url_path='',
            static_folder='public')

YOUR_DOMAIN = 'http://localhost:4242'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': '{{PRICE_ID}}',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success.html',
            cancel_url=YOUR_DOMAIN + '/cancel.html',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=4242)
'''