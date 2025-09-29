import pytest
import rdflib
from pyshacl import validate

# File paths
TEST_TTL_FILE = "soma.ttl"
TEST_SHACL_FILE = "SOMA_dataModel.shacl"
VOC_TTL_FILE = "somavoc.ttl"

def test_validate_LOD():
    """
    Test if converted N-Triples conform to SHACL constraints.
    """

    # Step 1: Load SHACL shapes graph
    shacl_graph = rdflib.Graph()
    shacl_graph.parse(TEST_SHACL_FILE, format="ttl")

    # Step 2: Load RDF data graph
    data_graph = rdflib.Graph()
    data_graph.parse(TEST_TTL_FILE, format="ttl")

    data_graph.parse(VOC_TTL_FILE, format="ttl")

    # Step 3: Validate RDF against SHACL constraints
    conforms, results_graph, report_text = validate(
        data_graph=data_graph,
        shacl_graph=shacl_graph,
        ont_graph=None,
        serialize_report_graph=True,
        debug=False,
        max_validation_depth=50
    )

    # Assert that the RDF data conforms to SHACL
    assert conforms, f"SHACL validation failed:\n{report_text}"

    print("SHACL Validation Test Passed")


if __name__ == "__main__":
    pytest.main()