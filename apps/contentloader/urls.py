from flaskcbv.url import Url, make_urls
from views import scriptJsView

namespases = make_urls(
    Url('js/script.js', scriptJsView(), name="scriptjs"),
)


