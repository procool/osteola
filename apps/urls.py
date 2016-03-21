from flaskcbv.url import Url, include, make_urls

import contentloader.urls
import main.urls
import cabinet.urls
import calend.urls
import auth.urls
import doctors.urls
import map.urls

namespases = make_urls(
    Url('/', include(main.urls.namespases, namespace='main')),
    Url('/contentloader', include(contentloader.urls.namespases, namespace='contentloader')),
    Url('/cabinet', include(cabinet.urls.namespases, namespace='cabinet')),
    Url('/calend', include(calend.urls.namespases, namespace='calend')),
    Url('/auth', include(auth.urls.namespases, namespace='auth')),
    Url('/doctor_details', include(doctors.urls.namespases, namespace='doctors')),
    Url('/map', include(map.urls.namespases, namespace='map')),
)
