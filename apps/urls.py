from flaskcbv.url import Url, include, make_urls

import contentloader.urls
import main.urls
import cabinet.urls
import calend.urls

namespases = make_urls(
    Url('/', include(main.urls.namespases, namespace='main')),
    Url('/contentloader', include(contentloader.urls.namespases, namespace='contentloader')),
    Url('/cabinet', include(cabinet.urls.namespases, namespace='cabinet')),
    Url('/calend', include(calend.urls.namespases, namespace='calend')),
)
