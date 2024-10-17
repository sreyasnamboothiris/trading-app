from django.http import JsonResponse
import yfinance as yf

def test_api(request):

    msft = yf.Ticker('RELIANCE.NS')
    data = msft.history(period='1d',interval='1m')
    da = data.tail(1).to_dict(orient='records')[0]
    print(type(data),'\n',da)

    
    return JsonResponse(msft.info)

