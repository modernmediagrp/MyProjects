from django.http import HttpResponse
from django.views.generic import TemplateView,ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from bootstrap_task.models import Book

class BookList(ListView):
    model = Book

class BookCreate(CreateView):
    model = Book
    fields = ['name', 'email', 'note']
    success_url = reverse_lazy('bootstrap_task:book_list')

class BookUpdate(UpdateView):
    model = Book
    fields = ['name', 'email', 'note']
    success_url = reverse_lazy('bootstrap_task:book_list')

class BookDelete(DeleteView):
    model = Book
    success_url = reverse_lazy('bootstrap_task:book_list')