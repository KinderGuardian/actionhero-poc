PROJECT = "Actionhero POC"
SHELL = /bin/sh

BIN = ./node_modules/.bin
ACTIONHERO_BIN = ./node_modules/actionHero/bin

NODE_ENV :=test

test:
	@$(BIN)/mocha --harmony --recursive --reporter nyan

pre_install:
	npm install

install: pre_install
	sed -ib 's/^.*env node$$/#!\/usr\/local\/bin\/node --harmony/' $(ACTIONHERO_BIN)/actionHero

.PHONY: test