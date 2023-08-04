- [Google PieCharts](https://www.react-google-charts.com/examples/pie-chart)
- [Recharts](https://github.com/recharts/recharts)

[Source](https://www.weave.works/blog/deploy-react-app-to-kubernetes-cluster)
From the root of project:
```bash
docker build --tag unfriendly-jarvis-front .
docker tag unfriendly-jarvis-front regyl/unfriendly-jarvis-front
docker push regyl/unfriendly-jarvis-front
```