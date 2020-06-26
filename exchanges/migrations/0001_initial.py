# Generated by Django 3.0.7 on 2020-06-26 13:38

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exchange',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=20, verbose_name='代码')),
                ('name', models.CharField(max_length=20, verbose_name='名字')),
                ('name_zh', models.CharField(blank=True, max_length=20, verbose_name='中文名')),
                ('created_at', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='创建于')),
                ('modified_at', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='修改于')),
                ('logo', models.ImageField(blank=True, upload_to='exchanges/logos')),
                ('active', models.BooleanField(default=False, verbose_name='启用')),
                ('rank', models.SmallIntegerField(default=0, verbose_name='排序')),
            ],
            options={
                'verbose_name': '交易所',
                'verbose_name_plural': '交易所',
            },
        ),
    ]
