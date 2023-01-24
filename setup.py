from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in strideclient/__init__.py
from strideclient import __version__ as version

setup(
	name="strideclient",
	version=version,
	description="Stride Client",
	author="Raghad Tareg",
	author_email="raghad@42.guru",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
