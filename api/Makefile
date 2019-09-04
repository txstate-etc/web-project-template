REPOSITORY?=registry.its.txstate.edu/time-api
QUAL_TAG?=qual
PROD_TAG?=prod

OK_COLOR=\033[32;01m
NO_COLOR=\033[0m

build-qual:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Building $(REPOSITORY):$(QUAL_TAG)"
	@docker build --rm -t $(REPOSITORY):$(QUAL_TAG) .

qual: build-qual
	@echo "$(OK_COLOR)==>$(NO_COLOR) Pushing $(REPOSITORY):$(QUAL_TAG)"
	@docker push $(REPOSITORY):$(QUAL_TAG)

build-prod:
	@echo "$(OK_COLOR)==>$(NO_COLOR) Building $(REPOSITORY):$(PROD_TAG)"
	@docker build --rm -t $(REPOSITORY):$(PROD_TAG) .

prod: build-prod
	@echo "$(OK_COLOR)==>$(NO_COLOR) Pushing $(REPOSITORY):$(PROD_TAG)"
	@docker push $(REPOSITORY):$(PROD_TAG)

.PHONY: build-qual qual build-prod prod
