import stripe
import os
import requests
from flask import Flask, redirect, request

key = "sk_test_51MZNdXDkVZPCuxAgUEcj4WixI3PPzfrl8zHpbcIISboO4VqFyGEmVLlIimWwGvb7gmGHYWpBnwR7BpFNBay7HZ6o00hG20up49"
stripe.api_key = key

# example code from https://stripe.com/docs/payments/checkout/how-checkout-works
app = Flask(__name__,
            static_url_path='',
            static_folder='public')

port = int(os.getenv("PORT"))
YOUR_DOMAIN = 'http://localhost:5173'

'''
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

@app.route('/back', methods=['POST'])
def load_all_products():
    r = requests.get("https://api.stripe.com/v1/products", auth=(key, ""), data={"active": "true"})
    data = r.json().get("data")
    print(data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port)
    load_all_products()