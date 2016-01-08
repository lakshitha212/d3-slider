# d3-slider
Simple slider

# json data formats for each d3 chart

1) Single or Grouped Bar chart
 * Single Bar Chart :http://bl.ocks.org/mbostock/3885304
 * Grouped Bar chart :http://bl.ocks.org/mbostock/3887051
 
[
    {
        "A": "100",
        "B": "200",
        "State": "D3-Slider",
        "ages": [
            {
                "name": "A",
                "value": "100"
            },
            {
                "name": "A",
                "value": "200"
            }
        ]
    }
]

2) Pie Chart
 * Pie Chart :http://bl.ocks.org/mbostock/3887235
 
[
    {
        "name": "A",
        "value": "100"
    },
    {
        "name": "B",
        "value": "200"
    }
]

3) Donut Chart
 * Donut Chart :http://bl.ocks.org/mbostock/3887193
 
[
    {
        "name": "A",
        "value": "100"
    },
    {
        "name": "B",
        "value": "200"
    }
]

4) Horizontally Single or Grouped Bar Chart
 * Horizontally Grouped Bar Chart :http://bl.ocks.org/erikvullings/51cc5332439939f1f292
 
[
    {
        "labels": [
            "January",
            "February",
            "March"
        ],
        "series": [
            {
                "label": "D3-Slider",
                "values": [
                    "100",
                    "200",
                    "300"
                ]
            }
        ]
    }
]

5) Zoomable Sunburst Chart
 * Zoomable Sunburst Chart :http://bl.ocks.org/kerryrodden/477c1bfb081b783f80ad
 
[
    {
        "name": "A",
        "text": "A",
        "children": [
            {
                "name": "a",
                "text": "a",
                "children": [
                    {
                        "name": "aa",
                        "size": "100",
                        "value": "200"
                    },
                    {
                        "name": "aaa",
                        "size": "200",
                        "value": "300"
                    }
                ]
            },
            {
                "name": "b",
                "text": "b",
                "children": [
                    {
                        "name": "bb",
                        "size": "300",
                        "value": "400"
                    },
                    {
                        "name": "bbb",
                        "size": "400",
                        "value": "500"
                    }
                ]
            }
        ]
    }
]
