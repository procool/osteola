import logging
import datetime

from flaskcbv.view import TemplateView
from settings import STATIC_URL

## Provide context varialbes from project settings


class defaultSettingsMixin(object):

    def get_context_data(self, **kwargs):
        context = super(defaultSettingsMixin, self).get_context_data(**kwargs)
        context['STATIC_URL'] = STATIC_URL
        return context



class myTemplateView(defaultSettingsMixin, TemplateView):
    pass
